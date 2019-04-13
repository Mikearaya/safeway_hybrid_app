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


	function table_of_content($catagory_id)
	{

		$this->db->where('CATAGORY_ID', $catagory_id);



		$this->db->select("article.ID, article.CATAGORY_ID,article.header");
		$this->db->from('article');
		$this->db->join('article_catagory', 'article_catagory.ID = article.CATAGORY_ID', "left");
		$this->db->where('CATAGORY_ID !=', NULL);
		$result_set = $this->db->get();
		return $result_set->result_array();
	}
}
