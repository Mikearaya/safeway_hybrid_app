<?php
class News extends API {

    function __construct($config = 'rest') {
        $this->model = 'news_model';
        $this->post_validator = 'add_news';
        $this->put_validator = 'update_news';
        parent::__construct($config);
    }
}
