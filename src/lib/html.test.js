import { describe, expect, it } from '@jest/globals';
import { departmentTemplate, template } from './html';

describe('html', () => {
  describe('generate page template', () => {
    it('generates correct template', () => {
      const result = template('title', 'content');

      expect(result).toEqual(`<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <link rel="stylesheet" href="../public/styles.css">
  </head>
  <body>content</body>
</html>`);
    });
  });

  describe('generate index template', () => {});

  describe('generate department template', () => {
    it('generates correct department template', async () => {
      const courses = [{ title: 'foo' }];
      const result = departmentTemplate('title', 'description', courses);

      expect(result).toEqual(`<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <link rel="stylesheet" href="../public/styles.css">
  </head>
  <body>
    <div class="department">
      <h2>title</h2>
      <p>description</p>
      <h3>Áfangar</h3>
      <table>
        <tr>
          <th>Númer</th>
          <th>Heiti</th>
          <th>Einingar</th>
          <th>Misseri</th>
          <th>Námsstig</th>
        </tr>
        <tr>
      <td></td>
      <td>foo</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
      </table>
    </div>
  </body>
</html>`);
    });
  });
});
