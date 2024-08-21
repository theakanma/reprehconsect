function normalizeDay(d) {
    // Convert the day string to lowercase for case-insensitive matching
    var day = d.toLowerCase();

    // Normalize day names to a standard format
    switch (day) {
        case 'mon':
        case 'monday':
            return 'Monday';
        case 'tue':
        case 'tuesday':
            return 'Tuesday';
        case 'wed':
        case 'wednesday':
            return 'Wednesday';
        case 'thu':
        case 'thursday':
            return 'Thursday';
        case 'fri':
        case 'friday':
            return 'Friday';
        case 'sat':
        case 'saturday':
            return 'Saturday';
        case 'sun':
        case 'sunday':
            return 'Sunday';
        default:
            // If the input is not recognized, return null or handle as needed
            return null;
    }
}
