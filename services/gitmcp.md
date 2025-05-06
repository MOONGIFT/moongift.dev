---
title: GitMCP
title_meta: GitMCP - Using GitHub Repositories as MCP
key: gitmcp
tags:
  - AI
  - MCP
  - OSS
---

[GitMCP](https://gitmcp.io/) is a service that allows you to use GitHub repositories as context for AI assistants. Simply change the github.com repository URL to gitmcp.io, and it becomes an MCP server that enables AI tools to understand the repository's content and provide more accurate code assistance.

[![GitMCP Website](/img/services/gitmcp.jpg)](https://gitmcp.io/)

<!--more-->

## Features

Here are the main features of GitMCP:

- Create a dedicated Model Context Protocol (MCP) server from GitHub repositories
- Instant setup without complex configuration
- Integration with GitHub Pages and public GitHub repositories
- Enables AI assistants to understand code in context

With GitMCP, AI assistants can deeply understand the repository's code, read files like llms.txt, llms-full.txt, and readme.md, providing more accurate and relevant responses.

## How to Use

Using GitMCP is very simple:

1. **Create MCP URL**: Convert GitHub URL to GitMCP URL
   - github.com/username/repo → gitmcp.io/username/repo
   - username.github.io/repo → username.gitmcp.io/repo
2. **Connect to AI Assistant**: Set the converted URL as the MCP server in your AI tool
3. **Enhance AI Coding**: AI understands the repository context and provides more accurate and helpful coding assistance

For example, in Cursor, update the `~/.cursor/mcp.json` file as follows:

```json
{
  "mcpServers": {
    "MCP Docs": {
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

Here's an example of our site's MCP server:

![](/img/services/gitmcp-2.jpg)

You can also chat with it:

![](/img/services/gitmcp-3.jpg)

## Compatible AI Tools

GitMCP can be integrated with the following MCP-compatible AI tools:

- Claude
- Cursor
- Windsurf
- VSCode
- Cline
- Highlight AI

## Repository

GitMCP is open-source software. You can access the GitHub repository through the following link:

[idosal/git\-mcp: Put an end to code hallucinations\! GitMCP is a free, open\-source, remote MCP server for any GitHub project](https://github.com/idosal/git-mcp)

## MOONGIFT Eye

GitMCP is a service with great potential to significantly enhance AI-driven development experiences. Particularly for large-scale projects and open-source projects, AI assistants can provide more precise support by understanding the entire codebase.

The simplicity of just changing github.com URLs to gitmcp.io is appealing. With no complex configuration or additional tool installation required, the barrier to entry is low, and you can experience the benefits immediately.

In today's world where AI-driven development is becoming commonplace, services like GitMCP have great potential to significantly contribute to developer productivity. It's definitely worth trying, especially for developers who regularly use AI assistants.

[GitMCP - Code with confidence!](https://gitmcp.io/)