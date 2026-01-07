
const formatDateAndTime = (date = Date.now()) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const formattedTime = newDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return {
        date : formattedDate,
        time : formattedTime
    }
}

export default formatDateAndTime