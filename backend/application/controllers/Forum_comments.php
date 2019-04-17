<?php


class Forum_Comments extends API
{

    function __construct($config = 'rest')
    {

        $this->model = 'forum_comments_model';
        parent::__construct($config);
    }
}
