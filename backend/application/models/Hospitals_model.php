
<?php 

class Hospitals_Model extends MY_Model
{


    function __construct()
    {
        $this->child_tables = array('hospital_locale' => 'HOSPITAL_ID');
        $this->table_name = 'hospital';
        $this->primary_key = 'ID';
        parent::__construct();
        
    }
}
