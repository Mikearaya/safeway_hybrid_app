<?php 


class Lesson_type_Model extends MY_Model
{

    function __construct()
    {
        $this->table_name = 'lesson_types';
        $this->primary_key = 'ID';
        parent::__construct();
    }
}
 
?>