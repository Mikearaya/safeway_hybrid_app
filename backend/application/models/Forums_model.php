<?php
class Forums_model extends MY_Model
{


    function __construct()
    {
        parent::__construct();
        $this->table_name = 'forum';
        $this->primary_key = 'ID';
        $this->child_tables = array('forum_locale' => 'FORUM_ID');
  
  }
}
