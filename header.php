<!DOCTYPE html>
<html lang="ja" <?php language_attributes(); ?>>
  <head profile="http://gmpg.org/xfn/11">
    <meta <?php echo 'charset='. bloginfo('charset'); ?> />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <?php if(is_category()): ?><?php elseif(is_archive()): ?>
    <meta content="noindex,follow" name="robots" />
    <?php elseif(is_tag()): ?>
    <meta content="noindex,follow" name="robots" />
    <?php endif; ?><?php wp_head(); ?>
  </head>
</html>
