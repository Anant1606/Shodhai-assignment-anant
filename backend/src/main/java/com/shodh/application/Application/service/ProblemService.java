package com.shodh.application.Application.service;

import com.shodh.application.Application.model.Problem;
import com.shodh.application.Application.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService {

    @Autowired
    private ProblemRepository problemRepository;

    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    public Problem createProblem(Problem problem) {
        return problemRepository.save(problem);
    }
}
