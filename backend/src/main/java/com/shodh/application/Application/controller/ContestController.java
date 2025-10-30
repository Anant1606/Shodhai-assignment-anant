package com.shodh.application.Application.controller;

import com.shodh.application.Application.model.Contest;
import com.shodh.application.Application.service.ContestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contests")
public class ContestController {

    @Autowired
    private ContestService contestService;

    @GetMapping
    public List<Contest> getAllContests() {
        return contestService.getAllContests();
    }

    @PostMapping
    public Contest createContest(@RequestBody Contest contest) {
        return contestService.createContest(contest);
    }
}
