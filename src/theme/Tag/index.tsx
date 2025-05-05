import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/Tag';

import styles from './styles.module.css';

export default function Tag({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  return (
    <Link
      href={permalink}
      title={description}
      className={clsx(
        styles.tag,
        label === 'OSS' ? 'text-white bg-blue-500 font-bold dark:text-blue-900 dark:bg-white' : '',
        count ?
          clsx(styles.tagWithCount, label === 'OSS' ? 'before:bg-blue-500 dark:before:bg-white' : '') :
          styles.tagRegular,
      )}>
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
