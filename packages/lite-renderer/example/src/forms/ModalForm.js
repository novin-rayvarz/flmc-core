import { BehaviorSubject } from "rxjs";
import { Modal, Button, Label, FormController, Container } from 'lite-renderer'

export default class ModalForm extends FormController {

    isSampleModalOpen = new BehaviorSubject(false);
    isSampleModalWithoutCloseButtonOpen = new BehaviorSubject(false);
    isSampleModalWithTitleOpen = new BehaviorSubject(false);
    isSampleModalWithoutHeaderOpen = new BehaviorSubject(false);
    isSampleModalWithSelfHandledCloseButtonOpen = new BehaviorSubject(false);

    elements = [
        Button("Open Sample Modal").onClick(() => this.isSampleModalOpen.next(!this.isSampleModalOpen.value)),
        Button("Open Sample Modal without close button").onClick(() => this.isSampleModalWithoutCloseButtonOpen.next(!this.isSampleModalWithoutCloseButtonOpen.value)),
        Button("Open Sample Modal with title").onClick(() => this.isSampleModalWithTitleOpen.next(!this.isSampleModalWithTitleOpen.value)),
        Button("Open Sample Modal without header").onClick(() => this.isSampleModalWithoutHeaderOpen.next(!this.isSampleModalWithoutHeaderOpen.value)),
        Button("Open Sample Modal with self handled close button").onClick(() => this.isSampleModalWithSelfHandledCloseButtonOpen.next(!this.isSampleModalWithSelfHandledCloseButtonOpen.value)),

        Modal(Container([
            Label("This is a sample modal")
        ])).open(this.isSampleModalOpen),
        Modal(Container([
            Label("This is a sample modal without close button")
        ]))
            .visibileHeaderCloseButton(false)
            .open(this.isSampleModalWithoutCloseButtonOpen),

        Modal(Container([
            Label("This is a sample modal with title")
        ]))
            .title("This is a title")
            .open(this.isSampleModalWithTitleOpen),

        Modal(Container([
            Label("This is a sample modal without header")
        ]))
            .visibileHeader(false)
            .open(this.isSampleModalWithoutHeaderOpen),

        Modal(Container([
            Label("This is a sample modal with self handled close button"),
            Button("Close").onClick(() => this.isSampleModalWithSelfHandledCloseButtonOpen.next(!this.isSampleModalWithSelfHandledCloseButtonOpen.value)),
        ]))
            .visibileHeader(false)
            .open(this.isSampleModalWithSelfHandledCloseButtonOpen)

    ]

}
