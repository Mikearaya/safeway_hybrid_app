<?php 

class Schools_Model extends MY_Model
{


    function __construct()
    {
        parent::__construct();
        $this->table_name = 'school';
        $this->primary_key = 'ID';
        $this->child_tables =  array('school_lessons' => 'SCHOOL_ID', 'school_locale' => 'SCHOOL_ID');
        
    }
}

