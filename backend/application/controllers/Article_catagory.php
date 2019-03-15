<?php


class Article_catagory extends API {
    function __construct($config = 'rest') {
        
        $this->model = 'article_catagory_model';
        $this->post_validator = 'add_article_catagory';
        $this->put_validator = 'update_article_catagory';
        parent::__construct($config);
    }

}

?>