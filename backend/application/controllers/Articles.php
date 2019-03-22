
<?php
class Articles extends API
{


	function __construct($config = 'rest')
	{

		$this->model = 'article_model';
		$this->post_validator = 'add_article';
		$this->put_validator = 'update_article';
		parent::__construct($config);
	}
}
