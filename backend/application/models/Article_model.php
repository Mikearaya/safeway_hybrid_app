
<?php 


class Article_Model extends MY_Model
{

	function __construct()
	{
		$this->child_tables = array('article_locale' => 'ARTICLE_ID');
		$this->table_name = 'article';
		$this->primary_key = 'ID';
		parent::__construct();
		
	}
}
