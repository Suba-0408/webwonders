document.getElementById("downloadBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adding content to the PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Portfolio - Subashini Jaishankar", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("About Me", 20, 40);
    doc.text(
        "I am a computer science student dedicated to building innovative digital solutions. My expertise includes frontend web development, UI/UX design, and cybersecurity.",
        20,
        50,
        { maxWidth: 170 }
    );

    doc.text("Projects", 20, 80);
    doc.text("1. Communify - A sign language recognition system for hearing-impaired individuals.", 20, 90, { maxWidth: 170 });
    doc.text("2. EduQuest - A quest-based learning system to enhance education.", 20, 100, { maxWidth: 170 });

    doc.text("Contact", 20, 130);
    doc.text("Email: [Your Email Here]", 20, 140);
    doc.text("LinkedIn: linkedin.com/in/yourname", 20, 150);

    // Save the PDF
    doc.save("Portfolio_Info.pdf");
});
