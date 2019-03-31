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


	public function content_GET($catagory_id)
	{

		$result = $this->article_model->table_of_content($catagory_id);

		$this->response($result, API::HTTP_OK);
	}
}
