import React from "react";

import { useSelector } from "react-redux";

export default function SideBar() {
    const modules = useSelector((state) => state.data);

    return (
        <aside>
            {modules.map((module) => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map((lesson) => (
                            <li key={lesson.id}>{lesson.title}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}
