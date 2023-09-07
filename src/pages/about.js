import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import '../style/footer.css';
import BrandedFooter from '../components/Footer'
import NavBar from '../components/NavBar'

class About extends Component {
  
  render() {
    return (
      <div className="Home">
            <NavBar></NavBar>

            <div id="main-content">
                <h3>About</h3>
                <p>
                    The goal of PatFig is to reduce the amount of time Patent Attorneys spend on drawings.<br/>
                    <br/>
                    Now, this is a reasoanably difficult problem. 
                    There are several factors to consider:
                </p>
                <ol>
                    <li>There is <em>no</em> publicly available data on the precise breakdown of how attorneys are wasting their time</li>
                    <li>Every firm - sometimes down to the level of attorney - has its own methods and tools of managing drawings (Word, Visio, Adobe Acrobat, etc.)</li>
                    <li>Inventors give attorneys drawings in all shapes and sizes and filetypes (there are a dozen CAD filetypes out there)</li>
                    <li>Different jurisidctions have slightly different rules around drawing requirements</li>
                </ol>
                <p>
                    However, I need to start somewhere. 
                    And, having spent lots of time looking at patent drawings (at least in the field of computer-related inventions), I've noticed there are a handful of images that pop up again and again.
                    Despite consistent use, there doesn't seem to be an online hub of public domain images for patent drawings.<br/>
                    <br/>
                    I'm sure there's some existing software that lets you import or download clip art to your document.
                    However, the use of these tools are not consistent or widespread. 
                    Many IP practitioners are probably needlessly re-inventing the wheel.
                    If you would like to help this project, check out the <a href="/#/contribute">contribute page</a> or send me an email.
                </p>
                <hr/>
                <h3>Legal</h3>
                <p>
                    The code for this project is protected by copyright.
                    Do not steal my idea.
                </p>
            </div>

            <BrandedFooter></BrandedFooter>
      </div>
    );
  }
}

export default About;
