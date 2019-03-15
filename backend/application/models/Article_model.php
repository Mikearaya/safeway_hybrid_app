<?php 


class Article_Model extends MY_Model
{

	function __construct()
	{
		$this->table_name = 'article';
		$this->primary_key = 'ID';
		parent::__construct();
	}
}
 