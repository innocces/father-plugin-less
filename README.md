<p align="center">
  <a href="/" target="_blank" rel="noopener noreferrer">
    <img style="max-width: 264px" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2023-05-16/1684246327680-less_logo.png" alt="father-plugin-less logo" />
  </a>
</p>
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/father-plugin-less"><img src="https://img.shields.io/npm/v/father-plugin-less" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/father-plugin-less" alt="node compatibility"></a>
  <a href="https://discord.gg/N82HK72uJk"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br />
<div align="center">
  <h2>father-plugin-less<h2>
</div>

## Usage

```bash
# npm
$ npm i father-plugin-less -D
# yarn
$ yarn add father-plugin-less -D
# pnpm
$ pnpm add father-plugin-less -D
```

## Configure

configure it in father config file `.fatherrc.ts`:

```ts
// use father-plugin-less defineConfig instand father export
import { defineConfig } from 'father-plugin-less';

export defineConfig({
  lessInBabel: LessInBabelOptions
});
```

## Options

custom config for less compiler. more config [see](https://lesscss.org/usage/#less-options)

```ts
import { defineConfig } from 'father-plugin-less';

export defineConfig({
  lessInBabel: {
    modifyVars: {

    }
    // ...
  }
});
```

to learn more, [see](./src/types.ts)

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).

## Sponsoring

<table>
  <tr align="center">
    <td>
      <a href="https://www.buymeacoffee.com/innocces" target="_blank">
        <img width="120" src="https://api.iconify.design/simple-icons:buymeacoffee.svg">
      </a>
    </td>
    <td>
      <a href="https://afdian.net/a/innocces" target="_blank">
        <img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-12-04/1670124736895-afdian.png">
      </a>
    </td>
  </tr>
</table>
