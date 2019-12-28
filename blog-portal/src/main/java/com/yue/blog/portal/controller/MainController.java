package com.yue.blog.portal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

    @GetMapping(value = {"","/"})
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView("index");
        return mv;
    }
}
