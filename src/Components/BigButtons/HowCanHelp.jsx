import * as React from 'react';
import {Link,matchPath} from "react-router-dom";

export default class HowCanHelp extends React.Component {

    //todo convert Hmm and Skip to links
    render() {
        return(
            <React.Fragment>
                <div>

                    <Link to={ `${matchPath.url}/../skillsform`}>I'm Open</Link>


                <div>{"Hmm"}</div>

                <div>{"Skip"}</div>
            </div>
    </React.Fragment>
    );
    }
}

/*

  <div >

* */
