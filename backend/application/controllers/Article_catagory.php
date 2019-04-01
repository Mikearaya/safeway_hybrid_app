<?php

class Article_catagory extends API
{
    function __construct($config = 'rest')
    {

        $this->model = 'article_catagory_model';
        $this->post_validator = 'add_article_catagory';
        $this->put_validator = 'update_article_catagory';
        parent::__construct($config);
    }


    public function index_get($type = 'catagories')
    {
        if ($type == 'catagories') {
            $data = $this->article_catagory_model->get_catagories_list();
            $this->response($data, API::HTTP_OK);
        } else {
            parent::index_GET($type);
        }
    }
}
