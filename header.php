<!doctype html>
<html <?php language_attributes(); ?> class="no-js" lang="en" ng-app="app">

<head <?php do_action('add_head_attributes'); ?>>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  <title>
    <?php wp_title(); ?>
  </title>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<hero-banner></hero-banner>
