import React, {useId} from "react";
import Skills from "./skills";

export default function AboutMe({data, skills}) {
    const {title,body} = data;
    const Id = useId();
    return (
        <section>
            <h2 className="mb-6">{title}</h2>
            {body?.map((el,i) => (
                <p key = {'${Id}_${i}'} className="mb-6" > {el}</p>
            ))}
            <p>{body}</p>
            <p>{body}</p>
            <Skills data={skills}/>
        </section>

    )
}
