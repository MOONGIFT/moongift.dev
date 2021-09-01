import fetch from 'node-fetch';
import dayjs from 'dayjs';
import fs from 'fs';
import { promisify } from 'util';
import YAML from 'yaml';

console.log();
(async (type) => {
  const f = await fetch(`https://api.github.com/repos/MOONGIFT/moongift.dev/issues?labels=${type}&sort=updated&per_page=100`);
  const ary = await f.json();
  for (const page of ary) {
    const createDate = new Date(page.created_at);
    const d = dayjs(createDate).format('YYYY-MM-DD');
    const updateDate = new Date(page.updated_at);
    const u = dayjs(updateDate).format('YYYY-MM-DD');

    const filePath = `./_posts/${d}-${page.id}.md`;
    const header = {
      title: page.title,
      category: type,
      create_date: d,
      latest_date: u,
      sticky: false,
      tags: page.labels.map(l => l.name).filter(l => l !== type),
      comment_count: page.comments,
    };
    const text = `---
${YAML.stringify(header)}
---
${page.body}
`;
    if (await fileExist(filePath)) {

    } else {
      await promisify(fs.writeFile)(filePath, text);
    }
  }
})(process.argv[2]);

const fileExist = async (path) => {
  try {
    await promisify(fs.lstat)(path);
    return true;
  } catch (e) {
    return false;
  }
}