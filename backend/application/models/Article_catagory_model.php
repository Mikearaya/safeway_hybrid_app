
<?php


class Article_catagory_model extends MY_Model
{
    function __construct()
    {
        parent::__construct();
        $this->table_name = 'article_catagory';
        $this->primary_key = 'ID';
        $this->child_tables = array('article_catagory_locale' => 'CATAGORY_ID');
    }
}
?> 