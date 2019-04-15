<?php

class News_Model extends MY_Model
{
    function __construct()
    {
        $this->table_name = 'article';
        $this->primary_key = 'ID';
        parent::__construct();
    }

    function get_list()
    {
        $this->db->where('CATAGORY_ID', null);
        $news_datasource = $this->db->get($this->table_name);

        $news_list = $news_datasource->result_array();
       


        for($i = 0; $i < count($news_list); $i++) {

            

        if(is_dir( $this->media_location['permanent'].'/'.$this->table_name .'/'.$news_list[$i]['ID']."/english") ) {
    
        $x = $this->getDirectoryContent($this->media_location['permanent'] .'/'.$this->table_name.'/'.$news_list[$i]['ID']."/english");
        

        foreach ($x as $info) {    
        if(!$info ->isDot() && !$info->isDir()) {
            
            $news_list[$i]['medias'] = $this->media_location['url'].'/'.$this->table_name.'/'.$news_list[$i]['ID']."/english/".$info->getFilename();
        } 
        }
        }

    }

    return $news_list;
}

}
