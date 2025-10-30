package com.shodh.application.Application.service;

import com.shodh.application.Application.model.Contest;
import com.shodh.application.Application.repository.ContestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContestService {

    @Autowired
    private ContestRepository contestRepository;

    public List<Contest> getAllContests() {
        return contestRepository.findAll();
    }

    public Contest createContest(Contest contest) {
        return contestRepository.save(contest);
    }
}
