// import { useState } from "react";

// const Crud = () => {
//     const [formboxVisible, setFormboxVisible] = useState(false);
//     const [items, setitems] = useState([
//         { id: 1, name: 'John Doe', subject: 'Math', class: '10', dob: '2005-05-15' },
//         { id: 2, name: 'Jane Smith', subject: 'Science', class: '11', dob: '2004-03-22' },
//         { id: 3, name: 'Sam Johnson', subject: 'History', class: '12', dob: '2003-08-10' },
//     ]);

//     // States for form input fields
//     const [name, setName] = useState("");
//     const [subject, setSubject] = useState("");
//     const [classGrade, setClassGrade] = useState("");
//     const [dob, setDob] = useState("");

//     const [errors, setErrors] = useState({});
//     const [isEditing, setIsEditing] = useState(false); // New state to track editing mode
//     const [editIndex, setEditIndex] = useState(null); // Index of the item being edited

//     const openFormDrawer = () => {
//         setFormboxVisible(true);
//     };

//     const closeFormDrawer = () => {
//         setFormboxVisible(false);
//         setName("");
//         setSubject("");
//         setClassGrade("");
//         setDob("");
//         setErrors({});
//         setIsEditing(false);
//         setEditIndex(null);
//     };

//     // Validation function to check each field
//     const validateForm = () => {
//         let formErrors = {};

//         if (!name.trim()) {
//             formErrors.name = "Name is required";
//         }
//         if (!subject.trim()) {
//             formErrors.subject = "Subject is required";
//         }
//         if (!classGrade || classGrade < 1 || classGrade > 12) {
//             formErrors.classGrade = "Class must be between 1 and 12";
//         }
//         if (!dob) {
//             formErrors.dob = "Date of birth is required";
//         }

//         setErrors(formErrors);
//         return Object.keys(formErrors).length === 0;
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             const updateditem = {
//                 id: isEditing ? items[editIndex].id : items.length + 1,
//                 name,
//                 subject,
//                 class: classGrade,
//                 dob,
//             };

//             if (isEditing) {
//                 // Update existing item data
//                 const updateditems = [...items];
//                 updateditems[editIndex] = updateditem;
//                 setitems(updateditems);
//             } else {
//                 // Add new item
//                 setitems([...items, updateditem]);
//             }

//             closeFormDrawer();
//         }
//     };

//     const deleteitem = (index) => {
//         const updateditems = [...items];
//         updateditems.splice(index, 1);
//         setitems(updateditems);
//     };

//     const handleEditClick = (index) => {
//         const item = items[index];
//         setName(item.name);
//         setSubject(item.subject);
//         setClassGrade(item.class);
//         setDob(item.dob);

//         setIsEditing(true);
//         setEditIndex(index);
//         openFormDrawer();
//     };

//     return (
//         <div className='w-full h-screen border-[3px] border-solid m-0 flex flex-col'>
//             <div className="flex justify-center mt-5 h-20">
//                 <h1 className="text-black font-bold">CRUD Application</h1>
//             </div>

//             <button 
//                 onClick={openFormDrawer}
//                 className='bg-indigo-900 text-white p-3 font-bold ml-10 w-[150px] rounded-md'>
//                 New item
//             </button>

//             <aside 
//                 className={`fixed top-0 right-0 bg-slate-500 h-full shadow-md p-8 box-border transition-transform duration-300 ease-in-out ${formboxVisible ? "translate-x-0" : "translate-x-full"}`} 
//                 style={{ width: '600px' }}
//             >
//                 <h1 className="text-xl font-bold">{isEditing ? "Edit item" : "Add item"}</h1>

//                 <button onClick={closeFormDrawer} className="mt-4 bg-red-500 text-white p-2 rounded">
//                     Close
//                 </button>

//                 <form onSubmit={handleFormSubmit}>
//                     <div className="mt-2">
//                         <input 
//                             type="text"
//                             placeholder="Enter your full name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="border rounded-md w-full h-[40px] p-3"
//                         />
//                         {errors.name && <p className="text-red-500">{errors.name}</p>}
//                     </div>

//                     <div className="mt-2">
//                         <input 
//                             type="text"
//                             placeholder="Enter your subject name"
//                             value={subject}
//                             onChange={(e) => setSubject(e.target.value)}
//                             className="border rounded-md w-full h-[40px] p-3"
//                         />
//                         {errors.subject && <p className="text-red-500">{errors.subject}</p>}
//                     </div>

//                     <div className="mt-2">
//                         <input 
//                             type="number"
//                             placeholder="Grade (1-12)"
//                             value={classGrade}
//                             onChange={(e) => setClassGrade(e.target.value)}
//                             className="border rounded-md w-full h-[40px] p-3"
//                         />
//                         {errors.classGrade && <p className="text-red-500">{errors.classGrade}</p>}
//                     </div>

//                     <div className="mt-2">
//                         <input 
//                             type="date"
//                             placeholder="Enter your DOB"
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             className="border rounded-md w-full h-[40px] p-3"
//                         />
//                         {errors.dob && <p className="text-red-500">{errors.dob}</p>}
//                     </div>

//                     <button type="submit" className="mt-2 p-2 text-white bg-red-500 rounded">
//                         {isEditing ? "Update" : "Submit"}
//                     </button>
//                 </form>
//             </aside>

// <div className='p-4 overflow-auto flex-grow'>
//     <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//             <tr>
//                 <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 font-semibold">SN</th>
//                 <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 font-semibold">item's Name</th>
//                 <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 font-semibold">Subject</th>
//                 <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 font-semibold">Class</th>
//                 <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 font-semibold">DOB</th>
//                 <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 font-semibold">Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             {items.map((item, index) => (
//                 <tr key={item.id} className="text-center">
//                     <td className="px-4 py-2 border border-grey-200">{index + 1}</td>
//                     <td className="px-4 py-2 border border-gray-200">{item.name}</td>
//                     <td className="px-4 py-2 border border-gray-200">{item.subject}</td>
//                     <td className="px-4 py-2 border border-gray-200">{item.class}</td>
//                     <td className="px-4 py-2 border border-gray-200">{item.dob}</td>
//                     <td className="px-4 py-2 border border-gray-200">
//                         <button 
//                             onClick={() => deleteitem(index)}
//                             className="px-4 py-2 bg-red-500 mx-1 rounded-lg my-1 text-white">
//                             Delete
//                         </button>
//                         <button 
//                             onClick={() => handleEditClick(index)}
//                             className="px-4 py-2 bg-lime-500 mx-1 rounded-lg my-1 text-white">
//                             Edit
//                         </button>
//                     </td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
//             </div>
//         </div>
//     );
// };

// export default Crud;

import React, { useState } from 'react';

const Crud = () => {
    // Form drawer visibility
    const [formboxVisible, setFormboxVisible] = useState(false);
    const openFormDrawer = () => setFormboxVisible(true);
    const closeFormDrawer = () => {
        setForm({ fullname: '', class: '', subject: '', dob: '' });
        setFormboxVisible(false)};

    // Form data state
    const [form, setForm] = useState({
        fullname: '',
        class: '',
        subject: '',
        dob: ''
    });

    // Handle form input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // Students array state
    const [students, setStudents] = useState([]);

    // Create new student entry
    const createStudent = (e) => {
        e.preventDefault();
        setStudents([...students, form]);
        setForm({ fullname: '', class: '', subject: '', dob: '' });
        closeFormDrawer();
    };

    // Delete student entry
    const deleteItem = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
    };

    // Editing functionality
    const [editIndex, setEditIndex] = useState(null);

    const editStudent = (index) => {
        setEditIndex(index);
        setFormboxVisible(true);
        setForm(students[index]);
    };

    // Save updated student entry
    const saveStudent = (e) => {
        e.preventDefault();
        const updatedStudents = students.map((student, i) => i === editIndex ? form : student);
        setStudents(updatedStudents);
        setEditIndex(null);
        setForm({ fullname: '', class: '', subject: '', dob: '' });
        closeFormDrawer();
    };

    return (
        <>
            <div className='w-full m-6 p-4 border-2 rounded h-screen'>
                <div className='mt-4 text-center text-red-600 text-2xl font-bold'>
                    <h1>Crud Application</h1>
                </div>
                <div className='bg-gray-400 inline-flex items-center text-sm p-0 hover:bg-red-500 rounded-md mt-2 ml-6'>
                    <button onClick={openFormDrawer} className='p-4 text-white font-bold'>
                        Add item
                    </button>
                </div>

                {/* Form drawer */}
                <aside
                    className={`fixed top-6 right-0 bg-slate-400 h-full shadow-md p-8 transition-transform duration-300 ease-in-out ${formboxVisible ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{ width: '600px' }}
                >
                    <h1 className='text-red-500 font-semibold'>Fill the form</h1>
                    <button onClick={closeFormDrawer} className='bg-slate-50 text-slate-900 p-3 rounded-md my-2 hover:bg-red-500'>
                        Close
                    </button>
                    <form onSubmit={editIndex === null ? createStudent : saveStudent}>
                        <input type="text" placeholder="Enter your full name" name="fullname" value={form.fullname} onChange={handleInput} className="border rounded-md w-full h-[40px] p-3 mt-4" />
                        <input type="text" placeholder="Enter Subject" name="subject" value={form.subject} onChange={handleInput} className="border rounded-md w-full h-[40px] p-3 mt-4" />
                        <input type="number" placeholder="Enter class" name="class" value={form.class} onChange={handleInput} className="border rounded-md w-full h-[40px] p-3 mt-4" />
                        <input type="date" placeholder="Enter your DOB" name="dob" value={form.dob} onChange={handleInput} className="border rounded-md w-full h-[40px] p-3 mt-4" />
                        <button type="submit" className={`mt-2 p-2 rounded-md ${editIndex === null ? 'bg-lime-500 hover:bg-red-300' : 'bg-pink-500 hover:bg-red-600'} text-black`}>
                            {editIndex === null ? 'Submit' : 'Save'}
                        </button>
                    </form>
                </aside>

                {/* Student table */}
                <div className='p-4 overflow-auto flex-grow m-2'>
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border border-gray-200 bg-gray-600 text-white font-semibold">SN</th>
                                <th className="px-4 py-2 border border-gray-200 bg-gray-600 text-white font-semibold">Item's Name</th>
                                <th className="px-4 py-2 border border-gray-200 bg-gray-600 text-white font-semibold">Subject</th>
                                <th className="px-4 py-2 border border-gray-200 bg-gray-600 text-white font-semibold">Class</th>
                                <th className="px-4 py-2 border border-gray-200 bg-gray-600 text-white font-semibold">DOB</th>
                                <th className="px-4 py-2 border border-gray-200 bg-gray-600 text-white font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td className="px-4 py-2 border border-grey-200">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-200">{item.fullname}</td>
                                    <td className="px-4 py-2 border border-gray-200">{item.subject}</td>
                                    <td className="px-4 py-2 border border-gray-200">{item.class}</td>
                                    <td className="px-4 py-2 border border-gray-200">{item.dob}</td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <button onClick={() => deleteItem(index)} className="px-4 py-2 bg-red-500 mx-1 rounded-lg text-white">
                                            Delete
                                        </button>
                                        <button onClick={() => editStudent(index)} className="px-4 py-2 bg-lime-500 mx-1 rounded-lg text-white">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Crud;
