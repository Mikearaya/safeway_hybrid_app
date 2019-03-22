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

  public function get_list()
  {

    $this->db->select("forum.ID, forum.title, count(forum_comments.FORUM_ID) as totalComments");
    $this->db->from('forum');
    $this->db->join('forum_comments', 'forum_comments.FORUM_ID = forum.ID', "left");
    $this->db->group_by('forum_comments.FORUM_ID, forum.ID');

    $result_set = $this->db->get();
    return $result_set->result_array();
        }
}
