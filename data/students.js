const students = [
    {student: 'Ryan Luis', passing: true},
    {student: 'John Doe', passing: false},
    {student: 'Jane Doe', passing: false},
    {student: 'Chad Brad', passing: true}
];

module.exports = {
    getAll: function() {
        return students
    }
}