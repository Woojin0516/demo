package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @RequestMapping( value = "/test/data" )
    public String testData(){
        return "데이터 전송 test 중 입니다....";
    }

}
