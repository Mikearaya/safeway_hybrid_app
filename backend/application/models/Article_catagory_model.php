<?php


class Article_catagory_model extends MY_Model
{
    public function __construct()
    {
        $this->table_name = 'article_catagory';
        $this->primary_key = 'ID';
        $this->child_tables = array('article_catagory_locale' => 'CATAGORY_ID');
        parent::__construct();
    }


    public function get_list()
    {
        $result_set = $this->db->get('article');



        $this->db->select("article.CATAGORY_ID,article_catagory.name, count(article.CATAGORY_ID) as totalArticles, country");
        $this->db->from('article');
        $result = $this->db->where('article.CATAGORY_ID !=', null);
        $this->db->join('article_catagory', 'article_catagory.ID = article.CATAGORY_ID');
        $this->db->group_by('article.CATAGORY_ID');

        $result_set = $this->db->get();
        return $result_set->result_array();
    }


    public function get_catagories_list()
    {
        $result_set = $this->db->get('article_catagory');

        return $result_set->result_array();
    }
}
