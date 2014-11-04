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
    <?php endif; ?><title><?php
      global $page, $paged;
      if(is_front_page()):
        bloginfo('name');
      elseif(is_single()):
        wp_title('');
      elseif(is_page()):
        wp_title('');
      elseif(is_archive()):
        wp_title('|',true,'right');
        bloginfo('name');
      elseif(is_search()):
        wp_title('-',true,'right');
      elseif(is_404()):
        echo'404 - ';
        bloginfo('name');
      endif;
      if($paged >= 2 || $page >= 2):
        echo'-'.sprintf('%sページ',
        max($paged,$page));
      endif;
      ?></title>
    <link <?php echo 'title='. bloginfo('name') .'RSS Feed'; echo 'href='. bloginfo('rss2_url'); ?>" rel="alternate" type="application/rss+xml />
    <?php wp_head(); ?>
  </head>
</html>
