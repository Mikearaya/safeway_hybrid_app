<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 class Article extends API {


 	function __construct($config = 'rest') {
		parent::__construct($config);
	$this->load->model('article_model');
	}


	public function index_GET($id = NULL) {

		$result = ['Value1', 'Value2'];

		($result) ? $this->response($result, API::HTTP_OK) : $this->$response($result, API::HTTP_BAD_REQUEST);
	}

}
?>