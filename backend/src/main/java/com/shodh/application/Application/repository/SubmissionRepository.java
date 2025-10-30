package com.shodh.application.Application.repository;

import com.shodh.application.Application.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Long> {
    // Example: find by user or problem if needed later
}
