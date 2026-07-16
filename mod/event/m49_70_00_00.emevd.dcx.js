// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49700000)) {
            $InitializeCommonEvent(0, 90055000, 49705200, 1, 49702200, 49700201);
            $InitializeCommonEvent(0, 90055001, 49705200, 1, 49700201, 49700200);
        }
        if (EventFlag(49700001)) {
            $InitializeCommonEvent(0, 90055000, 49705200, 2, 49702200, 49700201);
            $InitializeCommonEvent(0, 90055001, 49705200, 2, 49700201, 49700200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49700200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49702200, 49700200);
    }
    $InitializeCommonEvent(0, 90065910, 49700200, 49700205, 49700800, 941000, 690047, 49705210, 49700800, 905250601, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49700200, 49700800, 941000, 49705210, 49700800, 905250601, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49700800, 1, 0, 0, 1050, 941000, 905250601, 49700800);
    }
    $InitializeCommonEvent(0, 90015012, 49705210, 49700200);
    $InitializeCommonEvent(1, 90015012, 0, 49700200);
    $InitializeCommonEvent(0, 90015020, 49700200, 49700800);
    $InitializeCommonEvent(0, 90015008, 49700205, 49700800, 941000, 49700800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49702200, 49700800);
        $InitializeCommonEvent(0, 90015023, 49700200, 40, 0, 49705210, 49700800, 905250601, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49700200, 49705210, 40, 941000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49700200, 49700800, 49705210, 1020, 941000, 110320, 905250601, 49700800);
        $InitializeCommonEvent(0, 90015470, 49702200, 49700200, 49700800, 49705210, 0, 0, 49705210);
        $InitializeCommonEvent(0, 90015446, 49705210, 49700200, 49700800, 49702200);
        $InitializeCommonEvent(0, 90015460, 49702200, 49700800);
        $InitializeCommonEvent(0, 90015460, 49702200, 0);
        $InitializeCommonEvent(0, 90015460, 49702200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49702200, 49700800);
        $InitializeCommonEvent(0, 90015475, 49702200, 0);
        $InitializeCommonEvent(0, 90015475, 49702200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49700800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49700000, 49700300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49700000, 49700300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49700000, 49700300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49700000, 49700300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49700000, 49700300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49700000, 49700300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49700000, 49700301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49700000, 49700301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49700000, 49700301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49700000, 49700301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49700000, 49700301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49700000, 49700301);
    }
});

$Event(497002800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49702810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49700801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49700800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


