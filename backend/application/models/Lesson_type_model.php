<?php 


class Lesson_type_Model extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->table_name = 'lesson_types';
        $this->primary_key = 'ID';
        $this->child_tables = array('lesson_type_locale' => 'LESSON_ID');
        
    }
}
