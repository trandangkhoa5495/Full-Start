// Bài 1:
let mark_physics = Number(prompt("vật lý"));
mark_chemical = Number(prompt("hoá"));
mark_born = Number(prompt("sinh"));

const medium_score = (mark_physics + mark_chemical + mark_born)/3;
document.write("Điểm trung bình:" + medium_score+ "<br>");

const average_score1 = (mark_physics + mark_chemical + mark_born);
document.write("Tổng điểm:" + average_score1)


