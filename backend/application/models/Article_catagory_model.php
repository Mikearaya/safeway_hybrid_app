<?php


class Article_catagory_model extends MY_Model
{
    function __construct()
    {

        $this->table_name = 'article_catagory';
        $this->primary_key = 'ID';
        $this->child_tables = array('article_catagory_locale' => 'CATAGORY_ID');
        parent::__construct();
    }


    public function get_list()
    {

            $result_set = $this->db->get('article');

        $this->db->select("article.CATAGORY_ID,article_catagory.name, ANY_VALUE(article.ID) as ID, count(article.CATAGORY_ID) as totalArticles");
        $this->db->from('article');
        $this->db->join('article_catagory', 'article_catagory.ID = article.CATAGORY_ID', "left");
            $this->db->group_by('article.CATAGORY_ID');

        $result_set = $this->db->get();
         return $result_set->result_array();
        }
    }
 