const apiBaseUrl = "http://api.login2explore.com:5577";
const connToken = "CONNECTION_TOKEN";
const dbName = "SCHOOL-DB";
const relName = "STUDENT-TABLE";

const rollNoField = document.getElementById("rollNo");
const fullNameField = document.getElementById("fullName");
const classField = document.getElementById("class");
const birthDateField = document.getElementById("birthDate");
const addressField = document.getElementById("address");
const enrollmentDateField = document.getElementById("enrollmentDate");
const saveBtn = document.getElementById("saveBtn");
const updateBtn = document.getElementById("updateBtn");
const resetBtn = document.getElementById("resetBtn");

function disableAllFields() {
    fullNameField.disabled = true;
    classField.disabled = true;
    birthDateField.disabled = true;
    addressField.disabled = true;
    enrollmentDateField.disabled = true;
    saveBtn.disabled = true;
    updateBtn.disabled = true;
}

function enableFormFields() {
    fullNameField.disabled = false;
    classField.disabled = false;
    birthDateField.disabled = false;
    addressField.disabled = false;
    enrollmentDateField.disabled = false;
    saveBtn.disabled = false;
}

function resetForm() {
    rollNoField.value = "";
    fullNameField.value = "";
    classField.value = "";
    birthDateField.value = "";
    addressField.value = "";
    enrollmentDateField.value = "";
    disableAllFields();
    rollNoField.disabled = false;
}

async function checkDatabase(rollNo) {
    try {
        const response = await fetch(`${apiBaseUrl}/json/db/${dbName}/${relName}/query/${rollNo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "connToken": connToken
            }
        });

        const result = await response.json();
        return result.records.length > 0; 
    } catch (error) {
        console.error("Error checking database:", error);
        return false; 
    }
}

rollNoField.addEventListener("blur", async () => {
    const rollNo = rollNoField.value.trim();

    if (!rollNo) {
        alert("Roll No cannot be empty!");
        return;
    }

    const existsInDb = await checkDatabase(rollNo);

    if (existsInDb) {
        alert("Roll No exists. You can update.");
        rollNoField.disabled = true; 
        enableFormFields(); 
        updateBtn.disabled = false; 
        saveBtn.disabled = true; 
    } else {
        alert("New Roll No. You can save.");
        enableFormFields(); 
        saveBtn.disabled = false; 
        updateBtn.disabled = true; 
    }
});

saveBtn.addEventListener("click", async () => {
    const rollNo = rollNoField.value.trim();
    if (!rollNo) {
        alert("Roll No cannot be empty!");
        return;
    }

    const formData = {
        fullName: fullNameField.value.trim(),
        class: classField.value.trim(),
        birthDate: birthDateField.value.trim(),
        address: addressField.value.trim(),
        enrollmentDate: enrollmentDateField.value.trim()
    };

    if (Object.values(formData).some(field => field === "")) {
        alert("All fields are required!");
        return;
    }

    const response = await fetch(`${apiBaseUrl}/json/db/${dbName}/${relName}/insert`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "connToken": connToken
        },
        body: JSON.stringify({ fields: formData })
    });

    if (response.ok) {
        alert("Data saved successfully!");
        resetForm();
    } else {
        alert("Error saving data!");
    }
});

updateBtn.addEventListener("click", async () => {
    const rollNo = rollNoField.value.trim();
    if (!rollNo) {
        alert("Roll No cannot be empty!");
        return;
    }

    const formData = {
        fullName: fullNameField.value.trim(),
        class: classField.value.trim(),
        birthDate: birthDateField.value.trim(),
        address: addressField.value.trim(),
        enrollmentDate: enrollmentDateField.value.trim()
    };

    if (Object.values(formData).some(field => field === "")) {
        alert("All fields are required!");
        return;
    }

    const response = await fetch(`${apiBaseUrl}/json/db/${dbName}/${relName}/update/${rollNo}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "connToken": connToken
        },
        body: JSON.stringify({ fields: formData })
    });

    if (response.ok) {
        alert("Data updated successfully!");
        resetForm();
    } else {
        alert("Error updating data!");
    }
});

resetBtn.addEventListener("click", resetForm);

disableAllFields();
