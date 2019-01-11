package fr.perso.project.cucumber.stepdefs;

import fr.perso.project.MonolithApplicationApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = MonolithApplicationApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
