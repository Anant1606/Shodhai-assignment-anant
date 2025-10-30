package com.shodh.application.Application.service;

import com.shodh.application.Application.model.Submission;
import com.shodh.application.Application.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmissionService {

    @Autowired
    private SubmissionRepository submissionRepository;

    public List<Submission> getAllSubmissions() {
        return submissionRepository.findAll();
    }

    public Submission createSubmission(Submission submission) {
        return submissionRepository.save(submission);
    }
}
