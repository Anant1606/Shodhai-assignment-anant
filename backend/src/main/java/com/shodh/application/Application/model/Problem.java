package com.shodh.application.Application.model;

import jakarta.persistence.*;

@Entity
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 5000)
    private String description;

    @Lob
    private String input;

    @Lob
    private String expectedOutput;

    @ManyToOne
    private Contest contest;

    // Getters and setters...
}
