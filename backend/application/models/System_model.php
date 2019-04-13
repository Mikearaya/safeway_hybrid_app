<?php



class System_Model extends MY_Model
{


    function __construct()
    {
        parent::__construct();
    }



    public function initialize()
    {

        try {
            $this->add_system_languages();
            $this->add_system_regions();

            return true;
        } catch (Exception $e) {
            return false;
        }
    }


    public function add_system_languages()
    {

        $languages = array(
            array("name" => "Amharic"),
            array("name" => "English"),
            array("name" => "Afan Oromo"),
            array("name" => "Arabic")
        );

        $this->db->empty_table('language');
        $this->db->insert_batch('language', $languages);
    }


    public function add_system_regions()
    {



        $region = array(
            array("name" => "Addis Ababa"),
            array("name" => "Afar Region"),
            array("name" => "Amhara Region"),
            array("name" => "Benishangul-Gumuz Region"),
            array("name" => "Dire Dawa"),
            array("name" => "Gambela Region"),
            array("name" => "Harari Region"),
            array("name" => "Oromia Region"),
            array("name" => "Somali Region"),
            array("name" => "Southern Nations, Nationalities, and Peoples' Region"),
            array("name" => "Tigray Region"),

        );

        $this->db->empty_table('region');

        $this->db->insert_batch('region', $region);
    }
}
