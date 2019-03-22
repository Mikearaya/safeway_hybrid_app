<?php 



class Dashboard_Model extends MY_Model
{


    function __construct()
    {
        parent::__construct();
    }


    public function get_statstics()
    {
        
        $result_set['agencies_count'] = $this->db->count_all('agency');
        $result_set['forum_count'] = $this->db->count_all('forum');
        $result_set['hospital_count'] = $this->db->count_all('hospital');
        $result_set['emergency_contact_count'] = $this->db->count_all('emergency_contact');
        $result_set['school_count'] = $this->db->count_all('school');
        $result_set['hospital_count'] = $this->db->count_all('hospital');
        $result_set['complain_count'] = $this->db->count_all('complains');
        $result_set['news_count'] = $this->db->where('CATAGORY_ID', NULL)->count_all_results('article');
        $result_set['article_count'] = $this->db->where('CATAGORY_ID !=', NULL)->count_all_results('article');


        

        return $result_set;
    }
}
 