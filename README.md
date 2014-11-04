WordPress theme Template
=====

## INSTALL

```sh
$ npm install
```

## USAGE

``theme.zip`` is created when run the ``setup.sh``.

```sh
$ bash setup.sh
```

### Scss | Slim

If you want to compile this project, please run the ``$ gulp compile``.
To run the ``$ gulp watch`` If you want to compile it by performing the monitoring of file.

### Embed php code to slim

```slim
doctype html
html[php=="<?php echo 'attribute embed code'; ?>"]
  head
    /! <?php echo 'sample code.'; ?>
    /!
      <?php
        echo 'multiple line code.';
      ?>
```

```html
<html <?php echo 'attribute embed code'; ?>>
  <head>
    <?php echo 'sample code.'; ?><?php
      echo 'multiple line code.';
    ?>
  </head>
</html>
```
