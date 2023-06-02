input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
    basic.pause(2000)
    motor.motorStopAll()
})
basic.showIcon(IconNames.Surprised)
